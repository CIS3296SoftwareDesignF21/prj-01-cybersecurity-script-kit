import { HColor } from '@Hi/Colors';
import ClickButton from '@Hi/Components/ClickButton';
import HStack from '@Hi/Components/HStack';
import ImageView from '@Hi/Components/ImageView';
import IonIcon from '@Hi/Components/IonIcon';
import ScrollView from '@Hi/Components/ScrollView';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import RGBAModel from '@Hi/RGBAModel';
import Heading from './Heading';
import NavigationPanel from './NavigationPanel';
import WebsitePanel from './WebsitePanel';

export default class DownloadsPage extends VStack {
    constructor() {
        super(
            new NavigationPanel('Downloads'),

            new ScrollView(
                new VStack(
                    new WebsitePanel(
                        new Heading('Downloads', new IonIcon('cloud-download')),
                        new HStack(
                            new Spacer(),

                            new ClickButton(
                                new VStack(
                                    new IonIcon('logo-apple').font(200),
                                    new TextView('macOS').margin({ top: 25 }).font('lg')
                                )
                            )
                                .foreground(RGBAModel.BLACK)
                                .whenMouseOver((ev) => ev.view.foreground(HColor('gray')))
                                .whenMouseOut((ev) => ev.view.foreground(RGBAModel.BLACK)),

                            new Spacer(),

                            new ClickButton(
                                new VStack(
                                    new IonIcon('logo-tux').font(200),
                                    new TextView('Linux').margin({ top: 25 }).font('lg')
                                )
                            )
                                .foreground(RGBAModel.BLACK)
                                .whenMouseOver((ev) => ev.view.foreground(HColor('orange')))
                                .whenMouseOut((ev) => ev.view.foreground(RGBAModel.BLACK)),

                            new Spacer(),

                            new ClickButton(
                                new VStack(
                                    new IonIcon('logo-windows').font(200),
                                    new TextView('Windows').margin({ top: 25 }).font('lg')
                                )
                            )
                                .foreground(RGBAModel.BLACK)
                                .whenMouseOver((ev) => ev.view.foreground(HColor('blue')))
                                .whenMouseOut((ev) => ev.view.foreground(RGBAModel.BLACK)),

                            new Spacer()
                        )
                            .width('100%')
                            .margin({ top: 50 })
                    )
                ).stretch()
            ).stretch()
        );

        this.stretch();
    }
}
