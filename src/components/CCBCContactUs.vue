<template>
  <Page>
    <ActionBar class="actionBar" title="Contact Us" />
    <StackLayout marginLeft="10">
      <Label
        text="Mailing Address:"
        textWrap="true"
        textAlignment="center"
        class="h2"
      />
      <Label
        text="Christ Community Baptist Church"
        textWrap="true"
        textAlignment="center"
        class="h2"
      />
      <Label
        text="8016 176th St. East"
        textWrap="true"
        textAlignment="center"
        class="h2"
      />
      <Label
        text="Puyallup, WA 98375"
        textWrap="true"
        textAlignment="center"
        class="h2"
      />
      <Label text="" textWrap="true" textAlignment="center" class="h2" />
      <Label
        text="Phone: 253-846-3000"
        textWrap="true"
        textAlignment="center"
        class="h2"
      />
      <Label
        text="Email: christcommunity@comcast.net"
        textWrap="true"
        textAlignment="center"
        class="h2"
      />
      <Button class="myButton" @tap="phoneUsClick()">
        <FormattedString>
          <Span
            class="fas"
            :text="'fa-phone' | fonticon"
            fontAttributes="Bold"
          ></Span>
          <Span text=" Call Us" fontAttributes="Bold"></Span>
        </FormattedString>
      </Button>
      <Button class="myButton" @tap="emailUsClick()">
        <FormattedString>
          <Span
            class="fas"
            :text="'fa-envelope' | fonticon"
            fontAttributes="Bold"
          ></Span>
          <Span text=" Email Us" fontAttributes="Bold"></Span> </FormattedString
      ></Button>
    </StackLayout>
  </Page>
</template>

<script>
import { Utils } from '@nativescript/core';
export default {
  methods: {
    emailUsClick() {
      Utils.openUrl('mailto:christcommunity@comcast.net');
    },
    phoneUsClick() {
      Utils.openUrl('tel:+1-253-846-3000');
    },
  },
};
</script>
