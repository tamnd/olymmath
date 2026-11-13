---
tag: XFBEVNST0S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1814881
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18150
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2019
    source: hf-ai-mo-aops
    label: 2019 Online Math Open Problems
---
Let $ABC$ be a triangle. There exists a positive real number $x$ such that $AB=6x^2+1$ and $AC = 2x^2+2x$ , and there exist points $W$ and $X$ on segment $AB$ along with points $Y$ and $Z$ on segment $AC$ such that $AW=x$ , $WX=x+4$ , $AY=x+1$ , and $YZ=x$ . For any line $\ell$ not intersecting segment $BC$ , let $f(\ell)$ be the unique point $P$ on line $\ell$ and on the same side of $BC$ as $A$ such that $\ell$ is tangent to the circumcircle of triangle $PBC$ . Suppose lines $f(WY)f(XY)$ and $f(WZ)f(XZ)$ meet at $B$ , and that lines $f(WZ)f(WY)$ and $f(XY)f(XZ)$ meet at $C$ . Then the product of all possible values for the length of $BC$ can be expressed in the form $a + \dfrac{b\sqrt{c}}{d}$ for positive integers $a,b,c,d$ with $c$ squarefree and $\gcd (b,d)=1$ . Compute $100a+b+c+d$ .

*Proposed by Vincent Huang*
