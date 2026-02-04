import { useState } from 'react'
import { Play } from 'lucide-react'

const VideoSection = () => {
  const [videoError, setVideoError] = useState(false)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              See Us In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Watch our professional detailing process and see the transformation
            </p>
          </div>

          {/* Video Container */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-900 aspect-video">
            {!videoError ? (
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                onError={() => setVideoError(true)}
              >
                <source src="/videos/6875542644514251423.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : null}
            
            {/* Fallback if video doesn't exist */}
            {videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center p-8">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
                    <Play className="w-10 h-10 text-white" fill="white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Video Coming Soon
                  </h3>
                  <p className="text-gray-300 mb-4 max-w-md mx-auto">
                    Upload your video file to:
                  </p>
                  <p className="text-sm text-gray-400 mb-2 font-mono bg-gray-800 px-4 py-2 rounded inline-block">
                    /public/videos/detailing-video.mp4
                  </p>
                  <p className="text-sm text-gray-400 mt-4">
                    Supported formats: MP4, WebM
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Video Info */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Cars Detailed</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <div className="text-3xl font-bold text-gray-900 mb-2">5+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
