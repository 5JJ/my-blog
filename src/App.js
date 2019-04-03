import React, { Component } from 'react';
import SideBar from './SideBar';
import ContentsPageList from './ContentsPageList';
import TagList from './TagList';
import logo from './logo.svg';
import './App.css';
import { filterContent, selectLanguage } from './redux/action';
import { connect } from 'react-redux';
import LanguageList from './LanguageList';

class App extends Component {

  contentList () {
    return this.props.pages.filter(page => 
        page.tags.some((tag_item) => 
          this.props.tag_list.filter(item => item.checked).map(item => item.id).includes(tag_item)
        )
    );
  }

  render() {
    //console.log(this.contentList());
    //console.log(this.contentList());
    return (
      <div>
        <div className="sidebar">
          <LanguageList allLanguageList={this.props.language_list} selectLanguage={this.props.selectLanguage}/>
          <TagList allTagList={this.props.tag_list} filterContent={this.props.filterContent} />
          <section className="profile-box">
            <p>HelloWorld</p>
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <span className="list-item">Name</span>
                Jeonghui Oh
              </li>
              <li>
                <span className="list-item">Email</span>
                wjdgml015@gmail.com
              </li>
            </ul>
          </section>
        </div>
        <ContentsPageList contentList={this.contentList()} allTagList={this.props.tag_list} allLanguageList={this.props.language_list}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    tag_list: state.tag_list,
    language_list: state.language_list,
  }
}

// object 형태로.
const mapDispatchToProps = {
  filterContent, selectLanguage
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

