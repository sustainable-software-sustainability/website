# A glimpse at decades of FAIR struggles and practices in computational mathematics
**by Nicholas Thiery**  

## From session 2 - [Open Science & applying the FAIR principles to software](/wosss21/agenda#session-2)  
Computing has always been one of the favorite tools in (pure)
mathematics to discover and explore new theories. Thus, as computing
devices emerged, they were naturally adopted to compute examples, test
conjectures or even prove theorem, like the classic four color
theorem: computers became the telescope of mathematicians. A telescope
made both of general purpose hardware **and** bespoke software.

At first, it would take advanced skills to develop that software, but
the scale was limited: for each project a dedicated program would
typically be written by one or two persons. Starting from the 70's
With computing capacities and computational mathematics blossoming,
the range and the depth of mathematics that could be explored with the
computer increased drastically. There was a price however: the
software complexity and scale also increased drastically. Rewriting
software for each occasion was not sustainable any more; it had to be
**Reused**.

Many development models were explored in the 80's and 90's to achieve
that aim, with two main archetypes emerging: in the first archetype --
*developed by users for users* -- a mathematical community would get
together and build a common system aggregating and structuring the
development efforts of the community. Examples of such systems include
for example GAP for Group Theory, PARI for Number Theory, Macaulay for
Commutative Algebra, etc. Naturally these systems adopted -- when not
preceding -- the four principles of Free Software. Indeed computer
exploration is by nature a handicraft where the needs are ever
changing. Hence the user needs a toolbox that he not only can **reuse
as is**, but **observe** with a critical eye, **adapt** to his own
hand and job, with the ability to **redistribute** is adaptations.  A
major strength of the for-user-by-user development model is that
codesign is at its root, ensuring that the software meets the user's
needs and letting the user craft the tool to his own hand.

In the other archetype, the development was carried out by a dedicated
team, the obvious challenge being to fund such a team in the long run.
Thus, such systems usually ended up taking the commercial route, hence
targeting by necessity a wide audience susceptible to draw enough
revenue. These systems, including e.g. Maple, MuPAD or Mathematica,
had a major impact making computational mathematics more accessible by
putting it at the fingertip of casual researchers and teachers. At
least when they could afford the licences.

At this point, it should really be emphasized that this text is no
more than a glimpse into decades of work by hundreds. A proper history
should highlight dozens of other systems of all scales and mixed
development models that have supported mathematics over the years.
Not counting that mechanizing mathematics goes far beyond computation:
formal proofs, data bases, knowledge management, typesetting, etc.

At the turn of the century there was a growing frustration in the
community about the situation: through web searches, conferences, or
hearsay you would **Find** many functionality that you would dream to
use in your own computations, but more often than not they were not
**Accessible**, either because they were provided by a system with a
licence that you could not afford or that would not run on your computer,
or by a bespoke system that was not **Interoperable** with
yours. Many were dreaming of a system that would be simultaneously Free
Software and general purpose. The community had tight
resources to devote to such a system: minimal financial resources and very
little research software engineer time; remained some time, skills and enthusiasm
from many end users. The design had to adapt to this context and be
very lean: reuse existing mathematical components; reuse an existing
programming language (which one?), taking advantage of emergence of modern
ones that did fit the strong requirements for mathematical programming.

## Messages for policy makers

- Foster FAIR practices, but don't impose them unless absolutely necessary to counter-balance other higher forces
- Fund software maintenance
- Research Software Engineers
