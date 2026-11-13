---
tag: KJ2VX6H8PF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
13 LHS Students attend the LHS Math Team tryouts. The students are numbered $1, 2, .. 13$. Their scores are $s_1,s_2, ... s_{13}$, respectively. There are 5 problems on the tryout, each of which is given a weight, labeled $w_1, w_2, ... w_5$. Each score $s_i$ is equal to the sums of the weights of all problems solved by student $i$. On the other hand, each weight $w_j$ is assigned to be $\frac{1}{\sum_ {s_i} }$, where the sum is over all the scores of students who solved problem $j$. (If nobody solved a problem, the score doesn't matter). If the largest possible average score of the students can be expressed in the form $\frac{\sqrt{a}}{b}$, where $a$ is square-free, find $a+b$.

*Proposed by Jeff Lin*
