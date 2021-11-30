import { HColor } from '@Hi/Colors';
import ClickButton from '@Hi/Components/ClickButton';
import HIFullScreenView from '@Hi/Components/HIFullScreenView';
import HStack from '@Hi/Components/HStack';
import IonIcon from '@Hi/Components/IonIcon';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import { ViewController } from '@Hi/ViewController';
import HomePage from './HomePage';

class SiteWrapper extends HIFullScreenView {
    private contentController = new ViewController('ContentController');

    constructor() {
        super(
            new VStack(
                new HStack(
                    new TextView('CSK').font('xxl'),
                    new TextView('CyberSecurity Script Kit')
                        .font('xl')
                        .foreground(HColor('gray'))
                        .margin({ left: 25 }),
                    new Spacer(),
                    new ClickButton(
                        new HStack(
                            new IonIcon('logo-github').font('lg'),
                            new TextView('GitHub').padding({ left: 10 })
                        )
                    )
                        .font('md')
                        .background(HColor('blue'))
                        .foreground(HColor('background'))
                        .padding()
                        .rounded()
                )
                    .width('100%')
                    .padding()
                    .borderBottom({ size: 1, color: HColor('gray4'), style: 'solid' })
                    .fixed()
                    .setTop(0)
                    .setLeft(0)
                    .background(HColor('background').alpha(0.75))
                    .blur(),

                new VStack().id('main-content').padding({ top: 63 })
            )
        );

        ViewController.getController('ContentController')
            ?.bind(this.findViewById('main-content')!.body)
            .navigateTo(new HomePage());
    }
}

const controller = new ViewController('AppController');

controller.bind().navigateTo(new SiteWrapper());
