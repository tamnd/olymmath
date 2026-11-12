---
tag: H33ZDN0J2G
kind: problem
type: answer
answer: =-2,-1,0;=-1,-1,1;=1,-1,3;=3,-2,4;=4,-2,5;=6,-3,6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all values of the parameter $a$ for which the system $\left\{\begin{array}{l}y=|a-3| x+1|+x+3|+3|x+1|, \\ 2^{2-y} \log _{\sqrt{3}}\left((x+|a+2 x|)^{2}-6(x+1+|a+2 x|)+16\right)+2^{x+|a+2 x|} \log _{1 / 3}\left(y^{2}+1\right)=0, \text { has a unique } \\ x+|a+2 x| \leq 3,\end{array}\right.$

solution $(x ; y)$, where $x$ and $y$ are integers. Specify this solution for each found $a$. (16 points)
