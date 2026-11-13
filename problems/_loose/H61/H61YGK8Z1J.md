---
tag: H61YGK8Z1J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h428437
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6609
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208732
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Iran MO (3rd Round)
---
(a) We say that a hyperplane $H$ that is given with this equation
$$H=\{(x_1,\dots,x_n)\in \mathbb R^n \mid a_1x_1+ \dots +a_nx_n=b\}$$
( $a=(a_1,\dots,a_n)\in \mathbb R^n$ and $b\in \mathbb R$ constant) bisects the finite set $A\subseteq \mathbb R^n$ if each of the two halfspaces $H^+=\{(x_1,\dots,x_n)\in \mathbb R^n \mid a_1x_1+ \dots +a_nx_n>b\}$ and $H^-=\{(x_1,\dots,x_n)\in \mathbb R^n \mid a_1x_1+ \dots +a_nx_n<b\}$ have at most $\lfloor \tfrac{|A|}{2}\rfloor$ points of $A$ .

Suppose that $A_1,\dots,A_n$ are finite subsets of $\mathbb R^n$ . Prove that there exists a hyperplane $H$ in $\mathbb R^n$ that bisects all of them at the same time.

(b) Suppose that the points in $B=A_1\cup \dots \cup A_n$ are in general position. Prove that there exists a hyperplane $H$ such that $H^+\cap A_i$ and $H^-\cap A_i$ contain exactly $\lfloor \tfrac{|A_i|}{2}\rfloor$ points of $A_i$ .

(c) With the help of part (b), show that the following theorem is true: Two robbers want to divide an open necklace that has $d$ different kinds of stones, where the number of stones of each kind is even, such that each of the robbers receive the same number of stones of each kind. Show that the two robbers can accomplish this by cutting the necklace in at most $d$ places.
