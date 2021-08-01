<template>
  <Page @loaded="pageLoad" class="coverImage">
    <ActionBar class="actionBar" title="Welcome to CCBC!" />
    <ScrollView orientation="vertical">
      <StackLayout marginLeft="10">
        <Image
          src="~/assets/images/ccbc-logo.png"
          width="125"
          class="img-rounded"
        ></Image>
        <Label
          class="titlePageText text-center"
          :text="missionStatement"
          textWrap="true"
          fontStyle="italic"
        />
        <Button
          text="What We Believe"
          class="myButton"
          @tap="whatWeBelieveClick()"
        ></Button>
        <Button text="Sermons" class="myButton" @tap="sermonsClick()"></Button>
        <Button text="Life Groups" class="myButton" @tap="lifeGroupsClick()"></Button>
        <Button
          col="0"
          text="Giving"
          class="myButton"
          @tap="givingClick()"
        ></Button>
        <Label
          text="Worship Service Times"
          textWrap="true"
          class="titlePageText text-center"
          fontWeight="bold"
        />
        <Label
          text="Sunday, 9:30 AM"
          textWrap="true"
          class="titlePageText text-center"
        />
        <Label
          text="Sunday, 11:00 AM"
          textWrap="true"
          class="titlePageText text-center"
        />

        <GridLayout columns="1/5*, 1/5*, 1/5*, 1/5*, 1/5*">
          <Button col="0" class="myButton" @tap="facebookClick()">
            <FormattedString>
              <Span
                class="fab"
                :text="'fa-facebook' | fonticon"
                fontAttributes="Bold"
              ></Span>
            </FormattedString>
          </Button>
          <Button col="1" class="myButton" @tap="youtubeClick()">
            <FormattedString>
              <Span
                class="fab"
                :text="'fa-youtube' | fonticon"
                fontAttributes="Bold"
              ></Span>
            </FormattedString>
          </Button>
          <Button col="2" class="myButton" @tap="instagramClick()">
            <FormattedString>
              <Span
                class="fab"
                :text="'fa-instagram' | fonticon"
                fontAttributes="Bold"
              ></Span>
            </FormattedString>
          </Button>
          <Button col="3" class="myButton" @tap="contactUsClick()">
            <FormattedString>
              <Span
                class="fas"
                :text="'fa-envelope' | fonticon"
                fontAttributes="Bold"
              ></Span>
            </FormattedString>
          </Button>
          <Button col="4" class="myButton" @tap="calendarClick()">
            <FormattedString>
              <Span
                class="fas"
                :text="'fa-calendar' | fonticon"
                fontAttributes="Bold"
              ></Span>
            </FormattedString>
          </Button>
        </GridLayout>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import CCBCBeliefs from '@/components/CCBCBeliefs';
import CCBCVideos from '@/components/CCBCVideos';
import CCBCContactUs from '@/components/CCBCContactUs';
import CCBCGiving from '@/components/CCBCGiving';
import CCBCLifeGroups from '@/components/CCBCLifeGroups';
import CCBCCalendar from '@/components/CCBCCalendar';
import { Utils, isIOS } from '@nativescript/core';
import { openAdvancedUrl } from 'nativescript-advanced-webview';

export default {
  data() {
    return {
      missionStatement:
        '"Equipping imperfect people to live life with purpose."',
      facebookURL:
        'https://www.facebook.com/Christ-Community-Baptist-Church-116458748378161',
      youtubeURL: 'https://www.youtube.com/channel/UCdpdRSmHhf9ECJ63RM2S_2w',
      instagramURL: 'https://www.instagram.com/ccbc.puyallup',
      givingURL: 'https://christcommunitypuyallup.churchcenter.com/giving',
    };
  },
  methods: {
    pageLoad() {
      console.log('Main page Loaded.');
    },
    clickTest() {
      this.$navigateTo(CCBCBeliefs);
    },
    whatWeBelieveClick() {
      this.$navigateTo(CCBCBeliefs);
    },
    sermonsClick() {
      this.$navigateTo(CCBCVideos);
    },
    contactUsClick() {
      this.$navigateTo(CCBCContactUs);
    },
    givingClick() {

      //App was rejetced by Apple because charitable donations cannot be embedded in app
      //Their acceptable work around was to use a "SFSafariViewController" which the following
      //'nativescript-advanced-webview' component implements

      var opts = {
        url: 'https://christcommunitypuyallup.churchcenter.com/giving',
        toolbarColor: '#1ecabb',
        toolbarControlsColor: '#ffffff', // iOS only
        showTitle: false, // Android only
    };

    if (isIOS) {
      openAdvancedUrl(opts);
    } else {
      this.$navigateTo(CCBCGiving)
    }
      

    },
    facebookClick() {
      Utils.openUrl(this.facebookURL);
    },
    youtubeClick() {
      Utils.openUrl(this.youtubeURL);
    },
    instagramClick() {
      Utils.openUrl(this.instagramURL);
    },
    lifeGroupsClick() {
      this.$navigateTo(CCBCLifeGroups);
    },
    calendarClick() {
      this.$navigateTo(CCBCCalendar);
    }
  },
};
</script>
