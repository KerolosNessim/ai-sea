import { useTranslations } from 'next-intl'
import React from 'react'
import SectionHeader from '../section-header'

const ReviewsSection = () => {
  const t= useTranslations('reviews')
  return (
    <section className='container'>
      <SectionHeader
      title={t('title')}
      subtitle={t('subtitle')}
      description={t('description')}
      />
      {/* reviews */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        
      </div>
      
    </section>
  )
}

export default ReviewsSection