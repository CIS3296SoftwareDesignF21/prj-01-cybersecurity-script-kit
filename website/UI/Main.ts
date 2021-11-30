import ClickButton from '@Hi/Components/ClickButton';
import HIFullScreenView from '@Hi/Components/HIFullScreenView';
import HStack from '@Hi/Components/HStack';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import IonIcon from '@Hi/Components/IonIcon';
import { ViewController } from '@Hi/ViewController';
import { HColor } from '@Hi/Colors';

class HomePage extends HIFullScreenView {
    constructor() {
        super(
            new VStack(
                new HStack(
                    new TextView('CSK').font('xxl'),
                    new Spacer(),
                    new ClickButton(
                        new HStack(new IonIcon('logo-github').font('lg'), new TextView('GitHub'))
                    )
                        .font('md')
                        .background(HColor('blue'))
                        .foreground(HColor('background'))
                        .padding()
                        .rounded()
                )
                    .width('100%')
                    .padding()
            )
        );
    }
}

const controller = new ViewController('AppController');

controller.bind().navigateTo(new HomePage());
