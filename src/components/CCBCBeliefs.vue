<template>
  <Page>
    <ActionBar class="actionBar" title="What We Believe" />
    <ScrollView orientation="vertical">
      <StackLayout marginLeft="10">
        <Image
          src="~/assets/images/ccbc-logo.png"
          width="150"
          class="img-rounded m-b-20"
        ></Image>
        <Label :text="title" textAlignment="center" class="h1" />
        <Label
          :text="subheader"
          textAlignment="center"
          class="h2"
          textWrap="true"
        />
        <Label :text="paragraph1" textWrap="true" class="body" />
        <Label :text="paragraph2" textWrap="true" class="body" />
        <Label :text="paragraph3" textWrap="true" class="body" />
        <Label :text="paragraph4" textWrap="true" class="body" />
        <Label :text="paragraph5" textWrap="true" class="body" />
        <Label :text="paragraph6" textWrap="true" class="body" />
        <Label :text="paragraph7" textWrap="true" class="body" />
        <Label :text="paragraph8" textWrap="true" class="body" />
        <Label :text="paragraph9" textWrap="true" class="body" />
        <Label :text="paragraph10" textWrap="true" class="body" />
        <Label :text="paragraph11" textWrap="true" class="body" />
        <Label :text="paragraph12" textWrap="true" class="body" />
        <Label :text="paragraph13" textWrap="true" class="body" />
        <Label :text="paragraph14" textWrap="true" class="body" />
        <Label :text="paragraph15" textWrap="true" class="body" />
        <Label :text="paragraph16" textWrap="true" class="body" />
        <Label :text="paragraph17" textWrap="true" class="body" />
        <Button text="Back" class="myButton" @tap="$navigateBack"></Button>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
export default {
  name: 'CCBCMain',
  data() {
    return {
      title: 'What We Believe',
      subheader: 'Christ Community Baptist Church Statement of Beliefs',
      paragraph1:
        'Preface\nBaptists, since their beginnings, repeatedly have composed confessions which expressed the doctrinal consensus among related churches. In principle, however, Baptists always have insisted that no statement of faith can be considered creedally binding even upon concurring congregations. The purpose of their doctrinal summaries was to explain to other Christians and to the larger society what Baptists believed and practiced. Within and among Baptist churches, statements of faith also provided a standard for instruction, counsel and fellowship.',
      paragraph2: 'We, as the North American Baptist Conference, presently feel the need to state more fully our Baptist understanding of the Christian faith. The purpose that guided us in writing and the use that we intend for this declaration are',
      paragraph3: '1. To further the sense of identity and the spirit of unity within our North American Baptist Conference by declaring our common doctrinal understanding; \n2. To provide a basis for doctrinal instruction within our Conference;\n3. To provide a basis for doctrinal discussions in the hiring of Conference personnel;\n4. To serve as a reference point when opinions differ;\n5. To provide a basis for doctrinal discussion in admitting new churches and new pastors into our various associations;\n6. To provide a doctrinal guide for new churches; and\n7. To give a doctrinal witness beyond our Conference.',
      paragraph4: 'In continuity with our immediate forefathers and the larger fellowship of Baptists throughout history, we seek to practice and propagate by God’s grace the following convictions:',
      paragraph5: '1. We believe the Bible is God’s Word given by divine inspiration, the record of God’s revelation of Himself to humanity (II Timothy 3:16). It is trustworthy, sufficient, without error the supreme authority and guide for all doctrine and conduct (I Peter 1:23-25; John 17:17; II Timothy 3:16-17.) It is the truth by which God brings people into a saving relationship with Himself and leads them to Christian maturity (John 20:31, I John 5:9-12; Matthew 4:4; I Peter 2:2).',
      paragraph6: '2. We believe in the one living and true God, perfect in wisdom, sovereignty, holiness, justice, mercy and love (I Timothy 1:17; Psalm 86:15; Deuteronomy 32:3-4). He exists eternally in three coequal persons who act together in creation, providence and redemption (Genesis 1:26; I Peter 1:2; Hebrews 1:1-3).',
      paragraph7: 'a. The Father reigns with providential care over all life and history in the created universe. He hears and answers prayer (I Chronicles 29:11-13; Matthew 7:11). He initiated salvation by sending His Son, and He is Father to those who by faith accept His Son as Lord and Savior (I John 4:9-10; John 3:16; John 1:12; Acts 16:31).\nb. The Son became man, Jesus Christ, who was conceived of the Holy Spirit and born of the Virgin Mary (John 1:14; Matthew 1:18). Being fully God and fully man, He revealed God through His sinless life, miracles and teaching (John 14:9; Hebrews 4:15; Matthew 4:23-24). He provided salvation through His atoning death in our place and by His bodily resurrection (I Corinthians 15:3-4; II Corinthians 5:21; Romans 4:23-25). He ascended into heaven where He rules over all creation (Philippians 2:5-11). He intercedes for all believers and dwells in them as their ever-present Lord (Romans 8:34; John 14:23).\nc. The Holy Spirit inspired men to write the Scriptures (II Peter 1:21). Through this Word, He convicts individuals of their sinfulness and of the righteousness of Christ, draws them to the Savior, and bears witness to their new birth (James 1:18; John 16:7-11; I Thessalonians 1:5-6; Romans 8:16). At regeneration and conversion, the believer is baptized in the Holy Spirit (I Corinthians 12:13). The Spirit indwells, seals and gives spiritual gifts to all believers for ministry in the church and society (Romans 8:9-11; Ephesians 1:13-14; Romans 12:5-8; I Peter 4:10). He empowers, guides, teaches, fills, sanctifies and produces the fruit of Christlikeness in all who yield to Him (Acts 4:31; Romans 8:14; I Corinthians 2:10-13; Ephesians 5:18; II Thessalonians 2:13; Galatians 5:16; 22-23).',
      paragraph8: '3. We believe God created an order of spiritual beings called angels to serve Him and do His will (Psalm 148:1-5; Colossians 1:16). The holy angels are obedient spirits ministering to the heirs of salvation and glorifying God (Hebrews 1:6-7; 13-14). Certain angels, called demons, Satan being their chief, through deliberate choice revolted and fell from their exalted position (Revelation 12:7-9). They now tempt individuals to rebel against God (I Timothy 4:1; I Peter 5:8). Their destiny in hell has been sealed by Christ’s victory over sin and death (Hebrews 2:14; Revelation 20:10).',
      paragraph9: '4. We believe God created man in His own image to have fellowship with Himself and to be steward over His creation (Genesis 1:26-28). As a result, each person is unique, possesses dignity and is worthy of respect (Psalm 139:13-17). Through the temptation of Satan, Adam chose to disobey God; this brought sin and death to the human race and suffering to all creation (Genesis 3; Romans 5:12-21; 8-22). Therefore, everyone is born with a sinful nature and needs to be reconciled to God (Romans 3:9-18, 23). Satan tempts people to rebel against God, even those who love Him (Ephesians 4:27; II Corinthians 2:11; Matthew 16:23). Nonetheless, everyone is personally responsible to God for thoughts, actions and beliefs and has the right to approach Him directly through Jesus Christ, the only mediator (Romans 14:12; I Timothy 2:5).',
      paragraph10: '5. We believe salvation is redemption by Christ of the whole person from sin and death (II Timothy 1:9-10; I Thessalonians 5:23). It is offered as a free gift by God to all and must be received personally through repentance and faith in Jesus Christ (I Timothy 2:4; Ephesians 2:8-9; Acts 20:21). An individual is united to Christ by the regeneration of the Holy Spirit (Galatians 2:20; Colossians 1:27). As a child of God, the believer is acquitted of all guilt and brought into a new relationship of peace (Romans 5:1). Christians grow as the Holy Spirit enables them to understand and obey the Word of God (II Peter 3:18; Ephesians 4:15; I Thessalonians 3:12).',
      paragraph11: '6. We believe the Church is the body of which Christ is the head and all who believe in Him are members (Ephesians 1:22-23; Romans 12:4-5). Christians are commanded to be baptized upon profession of faith and to unite with a local church for mutual encouragement and growth in discipleship through worship, nurture, service and the proclamation of the Gospel of Jesus Christ to the world (Acts 2:41-42, 47; Luke 24:45-48). Each church is a self-governing body under the lordship of Christ with all members sharing responsibility (Acts 13:1-3; 14:26-28). The form of government is understood to be congregational (Matthew 18:17; Acts 6:3-6; 15:22-23).',
      paragraph12: 'The ordinances of the church are baptism and the Lord’s Supper. Baptism is the immersion of a believer in water in the name of the Father, and of the Son, and of the Holy Spirit (Matthew 28:18-20). It is an act of obedience symbolizing the believer’s identification with the death, burial and resurrection of the Savior Jesus Christ (Romans 6:3-5). The Lord’s Supper is the partaking of the bread and of the cup by believers together as a continuing memorial of the broken body and shed blood of Christ. It is an act of thankful dedication to Him and serves to unite His people until He returns (I Corinthians 11:23-26).',
      paragraph13: 'To express unity in Christ, local churches form associations and a conference for mutual counsel, fellowship and a more effective fulfillment of Christ’s commission (Acts 15; I Corinthians 6:1-3).',
      paragraph14: '7. We believe religious liberty, rooted in Scripture, is the inalienable right of all individuals to freedom of conscience with ultimate accountability to God (Genesis 1:27; John 8:32; II Corinthians 3:17; Romans 8:21; Acts 5:29). Church and state exist by the will of God. Each has distinctive concerns and responsibilities, free from control by the other (Matthew 22:21). Christians should pray for civil leaders, and obey and support government in matters not contrary to Scripture (I Timothy 2:1-4; Romans 13:1-7; I Peter 2:13-16). The state should guarantee religious liberty to all persons and groups regardless of their religious preferences, consistent with the common good.',
      paragraph15: '8. We believe Christians, individually and collectively, are salt and light in society (Matthew 5:13-16). In a Christlike spirit, they oppose greed, selfishness and vice; they promote truth, justice and peace; they aid the needy and preserve the dignity of people of all races and conditions (Hebrews 13:5; Luke 9:23; Titus 2:12; Philippians 4:8-9; I John 3:16-17; James 2:1-4).\nWe affirm the family as the basic unit of society and seek to preserve its integrity and stability (Genesis 2:21-25; Ephesians 6:1-4).',
      paragraph16: '9. We believe God, in His own time and in His own way, will bring all things to their appropriate end and establish the new heaven and the new earth (Ephesians 1:9-10, Revelation 21:1). The certain hope of the Christian is that Jesus Christ will return to the earth suddenly, personally and visibly in glory according to His promise (Titus 2:13; Revelation 1:7; 3:11; John 14:1-3). The dead will be raised, and Christ will judge mankind in righteousness (John 5:28-29). The unrighteous will be consigned to the everlasting punishment prepared for the devil and his angels (Matthew 25-41, 46; Revelation 20;10). The righteous, in their resurrected and glorified bodies, will receive their reward and dwell forever with the Lord (Philippians 3:20-21; II Corinthians 5:10; I Thessalonians 4:13-18).',
      paragraph17: 'Adopted by the North American Baptist Conference delegates, August 10-15, 1982, at Niagara Falls, New York.',
    };
  },
};
</script>
