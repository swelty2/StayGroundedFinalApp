<template>

  <div class="container">
    <!-- NAVBAR -->
    <nav>
      <ul>

        <li><a><router-link to="/home/Donna">Home</router-link></a></li>
        <li><a><router-link to="/data"> Data</router-link></a></li>

        <li><a><router-link to="/brew">Brew A Cup</router-link></a></li>
        <li><a><router-link to="/speechform">Voice Order</router-link></a></li>
      </ul>
    </nav>

    <div class="audio-control">
      <p id="audio-control" class="white-circle">
        <img src="../assets/microphone.png">
        <canvas class="visualizer"></canvas>
      </p>
      <p><span id="message"></span></p>
      <p>
        <input type="text" id="BOT" name="BOT" placeholder="BOT" value=""/>
      </p>
    </div>

  </div>
</template>

<script>
export default {
        name: "speechform",
        data() {
          return {
            botName: 'Barista'
        }
      },
      methods: {
        startSpeech() {
          console.log('Clicking the button');
        }
      }
    }
</script>

