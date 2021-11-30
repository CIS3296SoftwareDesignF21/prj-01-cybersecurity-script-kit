import { HColor } from '@Hi/Colors';
import ClickButton from '@Hi/Components/ClickButton';
import HStack from '@Hi/Components/HStack';
import ImageView from '@Hi/Components/ImageView';
import IonIcon from '@Hi/Components/IonIcon';
import ScrollView from '@Hi/Components/ScrollView';
import Spacer from '@Hi/Components/Spacer';
import TextView from '@Hi/Components/TextView';
import VStack from '@Hi/Components/VStack';
import Heading from './Heading';
import NavigationPanel from './NavigationPanel';
import WebsitePanel from './WebsitePanel';

export default class KillchainPage extends VStack {
    constructor() {
        super(
            new NavigationPanel('Killchain'),

            new ScrollView(
                new VStack(
                    new WebsitePanel(
                        new Heading(
                            'The Cyber Killchain',
                            new IonIcon('shield').foreground(HColor('green'))
                        ),

                        new TextView(
                            'The Cyber Killchain is a series of events that occur in the course of a cyber attack. The events are categorized into three categories: Information, Intrusion, and Exploitation.'
                        )
                            .width({
                                min: 500,
                                max: 800,
                                default: '75%',
                            })
                            .font('lg')
                            .padding()
                            .lineHeight('150%')
                    ),

                    new WebsitePanel(
                        new ImageView(
                            'https://blogvaronis2.wpengine.com/wp-content/uploads/2016/06/cyber-kill-chain-phases-2@2x.png'
                        ).width('100%'),
                        new ImageView(
                            'https://blogvaronis2.wpengine.com/wp-content/uploads/2016/06/KC-bgadd.png'
                        ).width('100%'),
                        new HStack(
                            new Spacer(),
                            new TextView('Images sourced from: ').font('md'),
                            new ClickButton(
                                new TextView('https://www.varonis.com/blog/cyber-kill-chain/')
                            )
                                .padding(5)
                                .whenClicked(() => {
                                    window.open(
                                        'https://www.varonis.com/blog/cyber-kill-chain/',
                                        '_blank'
                                    );
                                })
                                .font('md')
                        )
                            .width('100%')
                            .padding()
                    )
                )
            ).stretch()
        );
    }
}
