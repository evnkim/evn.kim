/**
 * A styled section with a bordered title
 */
export const Section: React.FC<{
  title: string;
  children: React.ReactNode;
  className?: string;
}> = ({ title, children, className = "" }) => (
  <section className={`mb-12 ${className}`}>
    <h2 className="text-2xl font-bold mb-6 pb-2 border-b-2 border-cyan-500/30">
      {title}
    </h2>
    {children}
  </section>
);

/**
 * A styled abstract/callout block
 */
export const Remark: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div
    className={`bg-cyan-500/5 dark:bg-cyan-500/10 border-l-4 border-cyan-500 p-6 rounded-r-lg ${className}`}
  >
    {children}
  </div>
);

/**
 * A styled subsection heading
 */
export const SubSection: React.FC<{
  title: string;
  children?: React.ReactNode;
  className?: string;
}> = ({ title, children, className = "" }) => (
  <div className={className}>
    <h3 className="text-xl font-semibold mt-6 mb-3 text-cyan-600 dark:text-cyan-400">
      {title}
    </h3>
    {children}
  </div>
);

