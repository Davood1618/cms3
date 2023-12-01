import React from 'react'
import './Features.css'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function Features() {
  return (
        <div className='Features'>

            <div className='FeatureItem'>
                <span className='FeatureTitle'>Revenue</span>
                <div className='FeatureContainer'>
                    <span className='FeatureMoney'>$2.415</span>
                    <span className='FeatureRate'>
                        11.4 <ArrowDownwardIcon className='FeatureIcon Negative'/>
                    </span>
                </div>
                <span className='FeatureSub'> compared to last month</span>
            </div>

            <div className='FeatureItem'>
                <span className='FeatureTitle'>sale</span>
                <div className='FeatureContainer'>
                    <span className='FeatureMoney'>$2.415</span>
                    <span className='FeatureRate'>
                        -1.4 <ArrowDownwardIcon className='FeatureIcon Negative'/>
                    </span>
                </div>
                <span className='FeatureSub'> compared to last month</span>
            </div>

            <div className='FeatureItem'>
                <span className='FeatureTitle'>cost</span>
                <div className='FeatureContainer'>
                    <span className='FeatureMoney'>$2.415</span>
                    <span className='FeatureRate'>
                        +2.4 <ArrowUpwardIcon className='FeatureIcon'/>
                    </span>
                </div>
                <span className='FeatureSub'> compared to last month</span>
            </div>
        </div>

  )
}
