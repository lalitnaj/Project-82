import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Platform,
    StatusBar,
    Image,
    Dimensions
  } from "react-native";

  

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

let customFonts = {
    "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
  };
  
  export default class StoryCard extends Component {
    constructor(props) {
      super(props);
      this.state = {
        fontsLoaded: false
      };
    }
  
    async _loadFontsAsync() {
      await Font.loadAsync(customFonts);
      this.setState({ fontsLoaded: true });
    }
  
    componentDidMount() {
      this._loadFontsAsync();
    }

    render() {
        return (
          <View style={styles.container}>
            <View style={styles.cardContainer}>
              <View style={styles.authorcontainer}>
                <View style={styles.authorImageContainer}>
                <Image
                  source={require("../assets/profile_img.png")}
                  style={styles.profileImage}
                ></Image>
              </View>
              <View style={styles.authorNameContainer}>
            <Text style={styles.authorNameText}>{this.props.post.author}</Text>
              </View>
            </View>
            <Image source={require("../assets/post.jpeg")} style={styles.postImage} />
            <View style={styles.captionContainer}>
                <Text style={styles.captionText}>
                    {this.props.post.caption}
                </Text>
            </View>
            <View style={styles.actionContainer}>
                <View style={styles.likeButton}>
                  <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
                  <Text style={styles.likeText}>12K</Text>
                </View>
              </View>
            </View>
          </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }
  });