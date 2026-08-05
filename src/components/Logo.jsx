import scarletLogo from '../assets/scarlet-logo.jpeg'

export default function Logo({ className = '' }) {
  return (
    <span
      className={`inline-flex items-end isolate h-[31px] overflow-hidden ${className}`}
      aria-label="Scarlet"
    >
      <span
        aria-hidden="true"
        className="block h-[31px] w-[21px] shrink-0 bg-no-repeat mix-blend-multiply"
        style={{
          backgroundImage: `url(${scarletLogo})`,
          backgroundSize: '54px 54px',
          backgroundPosition: '-17px -4px',
        }}
      />
      <span
        aria-hidden="true"
        className="-ml-px mb-[3px] block h-[17px] w-[119px] shrink-0 bg-no-repeat mix-blend-multiply"
        style={{
          backgroundImage: `url(${scarletLogo})`,
          backgroundSize: '188px 188px',
          backgroundPosition: '-41px -126px',
        }}
      />
    </span>
  )
}
