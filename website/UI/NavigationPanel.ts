import { HColor } from '@Hi/Colors';
import ClickButton from '@Hi/Components/ClickButton';
import HStack from '@Hi/Components/HStack';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import { ViewController } from '@Hi/ViewController';
import DownloadsPage from './DownloadsPage';
import HomePage from './HomePage';
import KillchainPage from './KillchainPage';
import ScreenshotsPage from './ScreenshotsPage';

class NavigationButton extends ClickButton {
    constructor(text: string, active: boolean) {
        const textView = new TextView(text);
        if (active) textView.bold();
        super(textView);
        this.padding(5).padding({ left: 10, right: 10 }).font('md');
    }
}

export default class NavigationPanel extends HStack {
    constructor(activeNav: string) {
        activeNav = activeNav.toLowerCase();

        super(
            new NavigationButton('Home', activeNav === 'home').whenClicked(() =>
                ViewController.getController('ContentController')!.navigateTo(new HomePage())
            ),

            new NavigationButton('Cyber Killchain', activeNav === 'killchain').whenClicked(() =>
                ViewController.getController('ContentController')!.navigateTo(new KillchainPage())
            ),

            new NavigationButton('Screenshots', activeNav === 'screenshots').whenClicked(() =>
                ViewController.getController('ContentController')!.navigateTo(new ScreenshotsPage())
            ),

            new NavigationButton('Downloads', activeNav === 'downloads').whenClicked(() =>
                ViewController.getController('ContentController')!.navigateTo(new DownloadsPage())
            ),

            new Spacer()
        );

        this.borderBottom({ size: 1, color: HColor('gray4'), style: 'solid' }).width('100vw');
    }
}
