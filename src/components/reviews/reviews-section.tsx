import { useTranslations } from 'next-intl'
import React from 'react'
import SectionHeader from '../section-header'
import ReviewCard from './review-card'
import SupportCard from './support-card'

const ReviewsSection = () => {
  const t= useTranslations('reviews')
  return (
    <section className='container space-y-10'>
      <SectionHeader
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      />
      {/* reviews */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-4'>
        <div className='lg:col-span-2'>
        <ReviewCard/>
        </div>
        <div className='lg:col-span-4 max-lg:-order-1'>
        <SupportCard/>
        </div>
        <div className='lg:col-span-2'>
        <ReviewCard/>
        </div>
        <div className='lg:col-span-2'>
        <ReviewCard/>
        </div>
        <div className='lg:col-span-4'>
        <ReviewCard/>
        </div>
        <div className='lg:col-span-2'>
        <ReviewCard/>
        </div>
      </div>
      
    </section>
  )
}

export default ReviewsSection