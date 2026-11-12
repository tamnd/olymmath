---
tag: RA308MHTD4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h366253
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4563
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2010
    source: hf-ai-mo-aops
    label: 2010 All-Russian Olympiad
---
Given is a natural number $n \geq 3$ . What is the smallest possible value of $k$ if the following statements are true?
For every $n$ points $ A_i = (x_i, y_i) $ on a plane, where no three points are collinear, and for any real numbers $ c_i$ ( $1 \le i \le n$ ) there exists such polynomial $P(x, y)$ , the degree of which is no more than $k$ , where $ P(x_i, y_i) = c_i $ for every $i = 1, \dots, n$ .

(The degree of a nonzero monomial $ a_{i,j} x^{i}y^{j} $ is $i+j$ , while the degree of polynomial $P(x, y)$ is the greatest degree of the degrees of its monomials.)
