---
tag: VKR429M3AM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3273472
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bmt/2016
    source: hf-ai-mo-aops
    label: 2016 BMT Spring
---
Let $(v_1, ..., v_{2^n})$ be the vertices of an $n$ -dimensional hypercube. Label each vertex $v_i$ with a real number $x_i$ . Label each edge of the hypercube with the product of labels of the two vertices it connects. Let $S$ be the sum of the labels of all the edges. Over all possible labelings, find the minimum possible value of $\frac{S}{x^2_1+ x^2_2+ ...+ x^2_n}$ in terms of $ n$ .

Note: an $n$ dimensional hypercube is a graph on $2^n$ vertices labeled labeled with the binary strings of length $n$ , where two vertices have an edge between them if and only if their labels differ in exactly one place. For instance, the vertices $100$ and $101$ on the $3$ dimensional hypercube are connected, but the vertices $100$ and $111$ are not.
