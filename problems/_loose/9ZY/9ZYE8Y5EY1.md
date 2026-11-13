---
tag: 9ZYE8Y5EY1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 French Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2522176
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=39136
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: fr-tst/2000
    source: hf-ai-mo-aops
    label: 2000 French Mathematical Olympiad
---
In this problem we consider so-called *cartesian triangles*, that is, triangles $ABC$ with integer sides $BC=a,CA=b,AB=c$ and $\angle A=\frac{2\pi}3$ . Unless noted otherwise, $\triangle ABC$ is assumed to be cartesian.

(a) If $U,V,W$ are the projections of the orthocenter $H$ to $BC,CA,AB$ , respectively, specify which of the segments $AU$ , $BV$ , $CW$ , $HA$ , $HB$ , $HC$ , $HU$ , $HV$ , $HW$ , $AW$ , $AV$ , $BU$ , $BW$ , $CV$ , $CU$ have rational length.
(b) If $I$ is the incenter, $J$ the excenter across $A$ , and $P,Q$ the intersection points of the two bisectors at $A$ with the line $BC$ , specify those of the segments $PB$ , $PC$ , $QB$ , $QC$ , $AI$ , $AJ$ , $AP$ , $AQ$ having rational length.
(c) Assume that $b$ and $c$ are prime. Prove that exactly one of the numbers $a+b-c$ and $a-b+c$ is a multiple of $3$ .
(d) Assume that $\frac{a+b-c}{3c}=\frac pq$ , where $p$ and $q$ are coprime, and denote by $d$ the $\gcd$ of $p(3p+2q)$ and $q(2p+q)$ . Compute $a,b,c$ in terms of $p,q,d$ .
(e) Prove that if $q$ is not a multiple of $3$ , then $d=1$ .
(f) Deduce a necessary and sufficient condition for a triangle to be cartesian with coprime integer sides, and by geometrical observations derive an analogous characterization of triangles $ABC$ with coprime sides $BC=a$ , $CA=b$ , $AB=c$ and $\angle A=\frac\pi3$ .
