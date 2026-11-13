---
tag: WEF64DRVN9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247069
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=292
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 74th Romanian Mathematical Olympiad
---
Let $ABC$ be a triangle inscribed in the circle $\mathcal{C}(O,1)$. Denote by $s(M)=OH_1^2+OH_2^2+OH_3^2,$ $(\forall) M \in\mathcal{C}\setminus \left\{A,B,C\right\},$ where $H_1,H_2,H_3,$ are the orthocenters of the triangles $MAB,~MBC$ and $MCA.$
$a)$ Prove that if $ABC$ is equilateral$,$ then $s(M)=6,(\forall) M \in\mathcal{C}\setminus \left\{A,B,C\right\},$
$b)$ Prove that if there exist three distinct points $M_1,M_2,M_3\in\mathcal{C}\setminus \left\{A,B,C\right\}$ such that $s(M_1)=$$s(M_2)$$=s(M_3),$ then $ABC$ is equilateral$.$
