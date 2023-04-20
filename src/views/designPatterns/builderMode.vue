<template>
  <div>
    <h2>建造者模式 (builder pattern) - 建造者模式属于创建型模型的一种，提供一种创建复杂对象的方式</h2>
    <h3>
      <ol>
        <li>它将一个复杂的对象的构建与它的表示分离，使得同样的构建过程可以创建不同的表示</li>
        <li>建造者模式是一步一步的创建一个复杂的对象，它允许用户通过指定复杂的对象的类型和内容就可以构建他们，用户不需要指定内部的具体构造细节</li>
      </ol>
    </h3>
  </div>

</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  getUser();
});

const getUser = () => {
  class Navbar {
    init() {
      console.log("navbar init");
    }
    getData() {

      console.log("navbar getData");
    }
    render() {
      console.log("navbar render");
    }
  }
  // var navbar = new Navbar();
  // navbar.init();
  // navbar.getData();
  // navbar.render();
  class List {
    init() {
      console.log("List init");
    }
    getData() {
      console.log("List getData");
    }
    render() {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("List render");
          resolve('list 11111')
        }, 1000)

      })
    }
  }
  // 建造者模式 通过建造的一个类，类里关注的是实现的一个个具体类
  class Creator {
    //  建造者只关注建造的过程 - startBuild，不关注具体的实现
    async startBuild(builder) {
      await builder.init();
      await builder.getData();
      await builder.render();
    }
  }

  const op = new Creator();

  // op.startBuild(new Navbar());
  op.startBuild(new List());
};
</script>
