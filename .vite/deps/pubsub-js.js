import {
  __commonJS
} from "./chunk-3EJPJMEH.js";

// node_modules/pubsub-js/src/pubsub.js
var require_pubsub = __commonJS({
  "node_modules/pubsub-js/src/pubsub.js"(exports, module) {
    (function(root, factory) {
      "use strict";
      var PubSub = {};
      if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
      } else {
        root.PubSub = PubSub;
        factory(PubSub);
      }
      if (typeof exports === "object") {
        if (module !== void 0 && module.exports) {
          exports = module.exports = PubSub;
        }
        exports.PubSub = PubSub;
        module.exports = exports = PubSub;
      } else if (typeof define === "function" && define.amd) {
        define(function() {
          return PubSub;
        });
      }
    })(typeof window === "object" && window || exports, function(PubSub) {
      "use strict";
      var messages = {}, lastUid = -1, ALL_SUBSCRIBING_MSG = "*";
      function hasKeys(obj) {
        var key;
        for (key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return true;
          }
        }
        return false;
      }
      function throwException(ex) {
        return function reThrowException() {
          throw ex;
        };
      }
      function callSubscriberWithDelayedExceptions(subscriber, message, data) {
        try {
          subscriber(message, data);
        } catch (ex) {
          setTimeout(throwException(ex), 0);
        }
      }
      function callSubscriberWithImmediateExceptions(subscriber, message, data) {
        subscriber(message, data);
      }
      function deliverMessage(originalMessage, matchedMessage, data, immediateExceptions) {
        var subscribers = messages[matchedMessage], callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions, s;
        if (!Object.prototype.hasOwnProperty.call(messages, matchedMessage)) {
          return;
        }
        for (s in subscribers) {
          if (Object.prototype.hasOwnProperty.call(subscribers, s)) {
            callSubscriber(subscribers[s], originalMessage, data);
          }
        }
      }
      function createDeliveryFunction(message, data, immediateExceptions) {
        return function deliverNamespaced() {
          var topic = String(message), position = topic.lastIndexOf(".");
          deliverMessage(message, message, data, immediateExceptions);
          while (position !== -1) {
            topic = topic.substr(0, position);
            position = topic.lastIndexOf(".");
            deliverMessage(message, topic, data, immediateExceptions);
          }
          deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
      }
      function hasDirectSubscribersFor(message) {
        var topic = String(message), found = Boolean(Object.prototype.hasOwnProperty.call(messages, topic) && hasKeys(messages[topic]));
        return found;
      }
      function messageHasSubscribers(message) {
        var topic = String(message), found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG), position = topic.lastIndexOf(".");
        while (!found && position !== -1) {
          topic = topic.substr(0, position);
          position = topic.lastIndexOf(".");
          found = hasDirectSubscribersFor(topic);
        }
        return found;
      }
      function publish(message, data, sync, immediateExceptions) {
        message = typeof message === "symbol" ? message.toString() : message;
        var deliver = createDeliveryFunction(message, data, immediateExceptions), hasSubscribers = messageHasSubscribers(message);
        if (!hasSubscribers) {
          return false;
        }
        if (sync === true) {
          deliver();
        } else {
          setTimeout(deliver, 0);
        }
        return true;
      }
      PubSub.publish = function(message, data) {
        return publish(message, data, false, PubSub.immediateExceptions);
      };
      PubSub.publishSync = function(message, data) {
        return publish(message, data, true, PubSub.immediateExceptions);
      };
      PubSub.subscribe = function(message, func) {
        if (typeof func !== "function") {
          return false;
        }
        message = typeof message === "symbol" ? message.toString() : message;
        if (!Object.prototype.hasOwnProperty.call(messages, message)) {
          messages[message] = {};
        }
        var token = "uid_" + String(++lastUid);
        messages[message][token] = func;
        return token;
      };
      PubSub.subscribeAll = function(func) {
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
      };
      PubSub.subscribeOnce = function(message, func) {
        var token = PubSub.subscribe(message, function() {
          PubSub.unsubscribe(token);
          func.apply(this, arguments);
        });
        return PubSub;
      };
      PubSub.clearAllSubscriptions = function clearAllSubscriptions() {
        messages = {};
      };
      PubSub.clearSubscriptions = function clearSubscriptions(topic) {
        var m;
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
            delete messages[m];
          }
        }
      };
      PubSub.countSubscriptions = function countSubscriptions(topic) {
        var m;
        var token;
        var count = 0;
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
            for (token in messages[m]) {
              count++;
            }
            break;
          }
        }
        return count;
      };
      PubSub.getSubscriptions = function getSubscriptions(topic) {
        var m;
        var list = [];
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
            list.push(m);
          }
        }
        return list;
      };
      PubSub.unsubscribe = function(value) {
        var descendantTopicExists = function(topic) {
          var m2;
          for (m2 in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m2) && m2.indexOf(topic) === 0) {
              return true;
            }
          }
          return false;
        }, isTopic = typeof value === "string" && (Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value)), isToken = !isTopic && typeof value === "string", isFunction = typeof value === "function", result = false, m, message, t;
        if (isTopic) {
          PubSub.clearSubscriptions(value);
          return;
        }
        for (m in messages) {
          if (Object.prototype.hasOwnProperty.call(messages, m)) {
            message = messages[m];
            if (isToken && message[value]) {
              delete message[value];
              result = value;
              break;
            }
            if (isFunction) {
              for (t in message) {
                if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value) {
                  delete message[t];
                  result = true;
                }
              }
            }
          }
        }
        return result;
      };
    });
  }
});
export default require_pubsub();
//# sourceMappingURL=pubsub-js.js.map
