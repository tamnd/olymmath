---
tag: SG73TVZ3D0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h500644
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8484
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210548
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2012
    source: hf-ai-mo-aops
    label: 2012 Online Math Open Problems
---
In the Cartesian plane, let $S_{i,j} = \{(x,y)\mid i \le x \le j\}$ . For $i=0,1,\ldots,2012$ , color $S_{i,i+1}$ pink if $i$ is even and gray if $i$ is odd. For a convex polygon $P$ in the plane, let $d(P)$ denote its pink density, i.e. the fraction of its total area that is pink. Call a polygon $P$ *pinxtreme* if it lies completely in the region $S_{0,2013}$ and has at least one vertex on each of the lines $x=0$ and $x=2013$ . Given that the minimum value of $d(P)$ over all non-degenerate convex pinxtreme polygons $P$ in the plane can be expressed in the form $\frac{(1+\sqrt{p})^2}{q^2}$ for positive integers $p,q$ , find $p+q$ .

*Victor Wang.*
