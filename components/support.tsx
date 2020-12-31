import { Subscribe } from './subscribe'
import { Elements, TipButton } from './tip-button'

export const Support: React.FC = () => {
    return (
        <section>
            <p className="text-sm md:text-base text-muted">
                If you find there&rsquo;s any value in what I do and want to
                help, you can subscribe for email updates or support my work
                directly.
            </p>

            <Subscribe />

            <div className="my-6 relative">
                <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center"
                >
                    <div className="w-full border-t border-fill" />
                </div>
                <div className="relative flex justify-center text-xs md:text-sm">
                    <span className="px-2 bg-background text-muted">
                        Or support my work
                    </span>
                </div>
            </div>

            <div className="px-1">
                <Elements>
                    <TipButton />
                </Elements>
            </div>
        </section>
    )
}
