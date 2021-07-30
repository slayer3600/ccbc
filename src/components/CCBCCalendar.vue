<template>
  <Page>
    <ActionBar class="actionBar" title="Calendar">
      <NavigationButton text="Back" />
    </ActionBar>

    <GridLayout>
      <WebView
        src="https://www.christcommunitybaptist.org/hp_wordpress/wp-admin/admin-ajax.php?action=SFgoogleStyled&SFstyle=dark&height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&src=Y2hyaXN0Y29tbXVuaXR5QGNvbWNhc3QubmV0&color=%23E67C73&showTitle=1&title=Church%20Events"
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
