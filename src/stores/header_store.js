import { observable, action } from 'mobx';
import Constants from '../constants/constants';

class HeaderStore {
    @observable pageTitle = "home";
    @observable menuHomeSelectedClass = 'headerLinkUnSelected';
    @observable menuAddAPostSelectedClass = 'headerLinkUnSelected';

    @action setPageTitle(newTitle) {
        this.pageTitle = newTitle;
    }

    @action setSelectedMenu(menuLabel, path) {
        console.log(menuLabel);
        console.log(path);
        let isMenuSelected = false;
        if (path === '/') {
            isMenuSelected = true;
            this.menuHomeSelectedClass = 'headerLinkSelected';
            this.menuAddAPostSelectedClass = 'headerLinkUnSelected';
        } else if (path === '/posts/new') {
            isMenuSelected = true;
            this.menuAddAPostSelectedClass = 'headerLinkSelected';
            this.menuHomeSelectedClass = 'headerLinkUnSelected';
        } else {
            this.menuHomeSelectedClass = 'headerLinkUnSelected';
            this.menuAddAPostSelectedClass = 'headerLinkUnSelected';
        }
    }

}
export default HeaderStore;