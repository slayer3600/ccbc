<template>
  <Page>
    <ActionBar class="actionBar">
      <GridLayout rows="*, *" columns="*, *">
        <Label text="Sermons" row="0" col="0" class="titleVideoText pull-left" />
        <Label :text="'Page ' + currentPage + ' of ' + numberOfPages" row="0" col="1" class="titleVideoText pull-right" />
        <Button
          v-if="videoList.prevPageToken"
          @tap="onPreviousPage"
          class="myPaginationButton pull-left m-b-2"
          row="1"
          col="0"
        >
          <FormattedString>
            <Span
              class="fas"
              :text="'fa-caret-left' | fonticon"
              fontAttributes="Bold"
            ></Span>
            <Span
              text=" Prev Page"
              fontAttributes="Bold"
            ></Span></FormattedString
        ></Button>
        <Button
          v-if="isNextPageAvailable"
          text="Next Page"
          @tap="onNextPage"
          class="myPaginationButton pull-right m-b-2"
          row="1"
          col="1"
        >
          <FormattedString>
            <Span text="Next Page " fontAttributes="Bold"></Span>
            <Span
              class="fas"
              :text="'fa-caret-right' | fonticon"
              fontAttributes="Bold"
            ></Span></FormattedString
        ></Button>
      </GridLayout>
    </ActionBar>
    <ListView for="item in videoList.items" @itemTap="onItemTap">
      <v-template>
        <GridLayout columns="1/3*, 2/3*">
          <Image :src="item.snippet.thumbnails.medium.url" stretch="none" />
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
    };
  },
  methods: {
    onItemTap(args) {
      console.log(`ListView item tap ${args.item.id.videoId}`);
      let YouTubeUrl = `https://www.youtube.com/watch?v=${args.item.id.videoId}`;
      Utils.openUrl(YouTubeUrl);
    },
    async onNextPage() {
      console.log(this.videoList.nextPageToken);
      let APIURL = `${this.youTubeAPIURL}&pageToken=${this.videoList.nextPageToken}`;
      const response = await axios.get(APIURL);
      this.videoList = response.data;
      this.currentPage++
    },
    async onPreviousPage() {
      console.log(this.videoList.nextPageToken);
      let APIURL = `${this.youTubeAPIURL}&pageToken=${this.videoList.prevPageToken}`;
      const response = await axios.get(APIURL);
      this.videoList = response.data;
      this.currentPage--
    },
  },
  computed: {
    youTubeAPIURL() {
      return `${this.youTubeAPIBaseUrl}search?part=snippet&channelId=${this.youTubeChannelId}&key=${this.youTubeAPIKey}&maxResults=${this.resultsPerPage}&order=date`;
    },
    isNextPageAvailable() {
      if (this.videoList.pageInfo) {
        if (this.videoList.pageInfo.resultsPerPage >= this.resultsPerPage) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    numberOfPages() {
      if (this.videoList.pageInfo){
        return Math.ceil(this.videoList.pageInfo.totalResults / this.resultsPerPage)
      } else {
        return -1
      }
    }
  },
  async mounted() {
    try {
      const response = await axios.get(this.youTubeAPIURL);
      console.dir(response.data);
      this.videoList = response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
