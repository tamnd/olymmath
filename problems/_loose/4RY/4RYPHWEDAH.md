---
tag: 4RYPHWEDAH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h52815
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44287
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2005
    source: hf-ai-mo-aops
    label: 2005 Iran MO (3rd Round)
---
For each $m\in \mathbb N$ we define $rad\ (m)=\prod p_i$ , where $m=\prod p_i^{\alpha_i}$ .**abc Conjecture**
Suppose $\epsilon >0$ is an arbitrary number, then there exist $K$ depinding on $\epsilon$ that for each 3 numbers $a,b,c\in\mathbb Z$ that $gcd (a,b)=1$ and $a+b=c$ then: $$ max\{|a|,|b|,|c|\}\leq K(rad\ (abc))^{1+\epsilon} $$

Now prove each of the following statements by using the $abc$ conjecture :
a) Fermat's last theorem for $n>N$ where $N$ is some natural number.
b) We call $n=\prod p_i^{\alpha_i}$ strong if and only $\alpha_i\geq 2$ .
c) Prove that there are finitely many $n$ such that $n,\ n+1,\ n+2$ are strong.
d) Prove that there are finitely many rational numbers $\frac pq$ such that: $$ \Big| \sqrt[3]{2}-\frac pq \Big|<\frac{2^ {1384}}{q^3} $$
