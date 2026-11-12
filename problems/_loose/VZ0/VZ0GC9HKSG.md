---
tag: VZ0GC9HKSG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 BMT
    url: https://artofproblemsolving.com/community/c6h3146403
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70453
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2022
    source: hf-ai-mo-aops
    label: 2022 BMT
---
For triangle $\vartriangle ABC$ , define its $A$ -excircle to be the circle that is externally tangent to line segment $BC$ and extensions of $\overleftrightarrow{AB}$ and $\overleftrightarrow{AC}$ , and define the $B$ -excircle and $C$ -excircle likewise.
Then, define the $A$ -*veryexcircle* to be the unique circle externally tangent to both the $A$ -excircle as well as the extensions of $\overleftrightarrow{AB}$ and $\overleftrightarrow{AC}$ , but that shares no points with line $\overleftrightarrow{BC}$ , and define the $B$ -veryexcircle and $C$ -veryexcircle likewise.
Compute the smallest integer $N \ge 337$ such that for all $N_1 \ge N$ , the area of a triangle with lengths $3N^2_1$ , $3N^2_1 + 1$ , and $2022N_1$ is at most $\frac{1}{22022}$ times the area of the triangle formed by connecting the centers of its three veryexcircles.
If your submitted estimate is a positive number $E$ and the true value is $A$ , then your score is given by $\max \left(0, \left\lfloor 25 \min \left( \frac{E}{A}, \frac{A}{E}\right)^3\right\rfloor \right)$ .
