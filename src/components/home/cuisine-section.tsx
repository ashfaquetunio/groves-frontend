import React from 'react'
import Container from '../ui/container'
import CuisineCard from './cuisine-card'
import SectionTitle from '@/ui/typography/section-title'
import { cuisines } from '@/assets/data'

const CuisineSection = () => {
    return (
        <section className="min-h-screen sec-p-y text-white text-center overflow-x-clip">
            <Container>
                <div className="mb-12">
                <SectionTitle className="mb-4 text-start sm:text-center max-w-[12ch] sm:max-w-full">
                    Experience the Finest Cuisine
                </SectionTitle>
                <p className="max-w-[80ch] mx-auto text-sm sm:text-base hidden sm:block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-8 text-start">
                    {
                        cuisines.map((cuisine, idx) => (
                            <React.Fragment key={idx}>
                                <CuisineCard data={cuisine} />
                            </React.Fragment>
                        ))
                    }
                </div>
            </Container>
        </section>
    )
}

export default CuisineSection