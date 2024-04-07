import React from 'react'
import Container from '@/ui/container'
import SectionTitle from '@/ui/typography/section-title'
import VideoPlayer from './video-player'
import TicketCard from './molecules/ticket-card'

const AboutSection = () => {
    return (
        <section className="sec-p-y">
            <Container className="text-white text-center">
                <div className="max-w-[904px] 2xl:max-w-[1200px] mx-auto">
                    <SectionTitle className="mb-4">
                        Mall Of: Endless Possibilities
                    </SectionTitle>
                    <p className="max-w-[80ch] mx-auto mb-12 text-[15px]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <VideoPlayer />
                    <TicketCard />
                </div>
            </Container>
        </section>
    )
}

export default AboutSection