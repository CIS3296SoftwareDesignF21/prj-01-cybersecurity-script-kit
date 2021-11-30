import { HColor } from '@Hi/Colors';
import ClickButton from '@Hi/Components/ClickButton';
import HStack from '@Hi/Components/HStack';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import { ViewController } from '@Hi/ViewController';
import HomePage from './HomePage';
import KillchainPage from './KillchainPage';

export default class NavigationPanel extends HStack {
    constructor(activeNav: string) {
        activeNav = activeNav.toLowerCase();
        const homeText = new TextView('Home');
        const killchainText = new TextView('Cyber Killchain');

        switch (activeNav) {
            case 'home':
                homeText.bold();
                break;
            case 'killchain':
                killchainText.bold();
                break;
        }

        super(
            new ClickButton(homeText)
                .padding(5)
                .padding({ left: 10, right: 10 })
                .font('md')
                .whenClicked(() =>
                    ViewController.getController('ContentController')!.navigateTo(new HomePage())
                ),

            new ClickButton(killchainText)
                .padding(5)
                .padding({ left: 10, right: 10 })
                .font('md')
                .whenClicked(() =>
                    ViewController.getController('ContentController')!.navigateTo(
                        new KillchainPage()
                    )
                ),

            new Spacer()
        );

        this.borderBottom({ size: 1, color: HColor('gray4'), style: 'solid' }).width('100%');
    }
}
