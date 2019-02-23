import React, { Component } from 'react';
import SideBar from './SideBar';
import ContentsPageList from './ContentsPageList';
import TagList from './TagList';
//import Count, {Alias} from './react_test/count';
//import PhoneForm from './react_test/PhoneForm';
//import PhoneInfoList from './react_test/PhoneInfoList';

import logo from './logo.svg';
import './App.css';
import { filterContent } from './redux/action';
import { connect } from 'react-redux';

class App extends Component {

  contentList () {
    return this.props.pages.filter(page => page.tags.some((tag_item) => this.props.tags.filter(item => item.checked).map(item => item.id).includes(tag_item)));
  }

  render() {
    //console.log(this.contentList());
    return (
      <div>
        <div className="sidebar">
          <TagList allTagList={this.props.tags} filterContent={this.props.filterContent} />
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
        <ContentsPageList contentList={this.contentList()} allTagList={this.props.tags}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
    tags: state.tag_list,
  }
}

// object 형태로.
const mapDispatchToProps = {
  filterContent
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

