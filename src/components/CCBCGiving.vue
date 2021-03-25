<template>
  <Page>
    <ActionBar class="actionBar" title="Giving" />
    <WebView
      src="https://christcommunitypuyallup.churchcenter.com/giving"
      @loadStarted="onLoadedStarted"
      @loadFinished="onLoaded"
    />
  </Page>
</template>

<script>
export default {
  methods: {
    onLoadedStarted() {
      console.log('Loading Started...');
    },
    onLoaded() {
      console.log('Loading completed...');
    },
  },
};
</script>
