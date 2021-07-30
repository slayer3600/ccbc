<template>
  <Page>
    <ActionBar class="actionBar" title="Life Groups">
      <NavigationButton text="Back" />
    </ActionBar>

    <GridLayout>
      <WebView
        src="https://www.christcommunitybaptist.org/life-groups"
        @loadStarted="onLoadedStarted"
        @loadFinished="onLoaded"
      />
      <ActivityIndicator :busy="isBusy" />
    </GridLayout>
  </Page>
</template>

<script>
export default {
  data() {
    return {
      isBusy: true,
    };
  },
  methods: {
    onLoadedStarted() {
      console.log('Loading Started...');
    },
    onLoaded() {
      console.log('Loading completed...');
      this.isBusy = false;
    },
  },
};
</script>