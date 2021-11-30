import { HColor } from '@Hi/Colors';
import ClickButton from '@Hi/Components/ClickButton';
import HStack from '@Hi/Components/HStack';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import { ViewController } from '@Hi/ViewController';
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
            new NavigationButton('Home', activeNav === 'Home').whenClicked(() =>
                ViewController.getController('ContentController')!.navigateTo(new HomePage())
            ),

            new NavigationButton('Cyber Killchain', activeNav === 'Killchain').whenClicked(() =>
                ViewController.getController('ContentController')!.navigateTo(new KillchainPage())
            ),

            new NavigationButton('Screenshots', activeNav === 'Screenshots').whenClicked(() =>
                ViewController.getController('ContentController')!.navigateTo(new ScreenshotsPage())
            ),

            new Spacer()
        );

        this.borderBottom({ size: 1, color: HColor('gray4'), style: 'solid' }).width('100vw');
    }
}
