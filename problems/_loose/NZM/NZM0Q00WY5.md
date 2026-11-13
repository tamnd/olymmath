---
tag: NZM0Q00WY5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1620755
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16829
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218469
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2018
    source: hf-ai-mo-aops
    label: 2018 Online Math Open Problems
---
Let $m$ and $n$ be positive integers. Fuming Zeng gives James a rectangle, such that $m-1$ lines are drawn parallel to one pair of sides and $n-1$ lines are drawn parallel to the other pair of sides (with each line distinct and intersecting the interior of the rectangle), thus dividing the rectangle into an $m\times n$ grid of smaller rectangles. Fuming Zeng chooses $m+n-1$ of the $mn$ smaller rectangles and then tells James the area of each of the smaller rectangles. Of the $\dbinom{mn}{m+n-1}$ possible combinations of rectangles and their areas Fuming Zeng could have given, let $C_{m,n}$ be the number of combinations which would allow James to determine the area of the whole rectangle. Given that $$A=\sum_{m=1}^\infty \sum_{n=1}^\infty \frac{C_{m,n}\binom{m+n}{m}}{(m+n)^{m+n}},$$ then find the greatest integer less than $1000A$ .

*Proposed by James Lin
