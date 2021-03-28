<template>
  <Page>
    <ActionBar class="actionBar" title="Sermons">
      <NavigationButton text="Back" />
    </ActionBar>
    <ListView
      for="item in videoList.items"
      @itemTap="onItemTap"
      @loadMoreItems="onLoadMoreItems"
    >
      <v-template>
        <GridLayout columns="1/3*, 2/3*">
          <Image
            col="0"
            :src="item.snippet.thumbnails.default.url"
            stretch="aspectFill"
            height="90"
          />
          <Label col="1" :text="item.snippet.description" class="body" />
        </GridLayout>
      </v-template>
    </ListView>
  </Page>
</template>

<script>
import axios from 'axios';
import { Utils } from '@nativescript/core';
export default {
  data() {
    return {
      message: 'Hello Sermons',
      youTubeAPIBaseUrl: 'https://youtube.googleapis.com/youtube/v3/',
      youTubeChannelId: 'UCdpdRSmHhf9ECJ63RM2S_2w',
      youTubeAPIKey: 'AIzaSyB2xbtdkScAc3cpFNwkxLbrZGJLsdwP5GE',
      resultsPerPage: '25',
      videoList: [],
      currentPage: 1,
      nextPageToken: null,
    };
  },
  methods: {
    onItemTap(args) {
      console.log(`ListView item tap ${args.item.id.videoId}`);
      let YouTubeUrl = `https://www.youtube.com/watch?v=${args.item.id.videoId}`;
      Utils.openUrl(YouTubeUrl);
    },
    onLoadMoreItems() {
      if (this.isNextPageAvailable) {
        console.log('Loading more items...');
        this.onNextPage();
      }
    },
    async onNextPage() {
      console.log("Next page token: " + this.nextPageToken);
      let APIURL = `${this.youTubeAPIURL}&pageToken=${this.nextPageToken}`;
      const response = await axios.get(APIURL);
      this.nextPageToken = response.data.nextPageToken;
      this.videoList.items.push(...response.data.items);
      this.currentPage++;
    },
    async onPreviousPage() {
      console.log(this.videoList.nextPageToken);
      let APIURL = `${this.youTubeAPIURL}&pageToken=${this.videoList.prevPageToken}`;
      const response = await axios.get(APIURL);
      this.videoList = response.data;
      this.currentPage--;
    },
  },
  computed: {
    youTubeAPIURL() {
      return `${this.youTubeAPIBaseUrl}search?part=snippet&channelId=${this.youTubeChannelId}&key=${this.youTubeAPIKey}&maxResults=${this.resultsPerPage}&order=date`;
    },
    isNextPageAvailable() {
      return this.nextPageToken ? true: false
    },
    numberOfPages() {
      if (this.videoList.pageInfo) {
        return Math.ceil(
          this.videoList.pageInfo.totalResults / this.resultsPerPage
        );
      } else {
        return -1;
      }
    },
  },
  async mounted() {
    try {
      const response = await axios.get(this.youTubeAPIURL);
      console.dir(response.data);
      this.videoList = response.data;
      this.nextPageToken = this.videoList.nextPageToken;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
