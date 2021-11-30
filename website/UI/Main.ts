import ClickButton from '@Hi/Components/ClickButton';
import HIFullScreenView from '@Hi/Components/HIFullScreenView';
import HStack from '@Hi/Components/HStack';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import IonIcon from '@Hi/Components/IonIcon';
import { ViewController } from '@Hi/ViewController';
import { HColor } from '@Hi/Colors';
import ScrollView from '@Hi/Components/ScrollView';
import Resources from '@Hi/Resources';
import ImageView from '@Hi/Components/ImageView';

class HomePage extends HIFullScreenView {
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

                new HStack(
                    new ClickButton(new TextView('Home').bold())
                        .padding(5)
                        .padding({ left: 10, right: 10 })
                        .font('md'),
                    new Spacer()
                )
                    .margin({ top: 63 })
                    .borderBottom({ size: 1, color: HColor('gray4'), style: 'solid' })
                    .width('100%'),

                new ScrollView(
                    new VStack(
                        new ImageView('/img/splash.png', 'Splash Image')
                            .width('100%')
                            .background(HColor('gray'))
                    ).stretch()
                ).stretch()
            )
        );
    }
}

const controller = new ViewController('AppController');

controller.bind().navigateTo(new HomePage());
