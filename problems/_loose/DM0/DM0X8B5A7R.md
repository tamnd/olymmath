---
tag: DM0X8B5A7R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3112280
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=635
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204304
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2023
    source: hf-ai-mo-aops
    label: 2023 Caucasus Mathematical Olympiad
---
Let $ABC$ be an equilateral triangle with the side length equals $a+ b+ c$ . On the side $AB{}$ of the triangle $ABC$ points $C_1$ and $C_2$ are chosen, on the side $BC$ points $A_1$ and $A_2$ , arc chosen, and on the side $CA$ points $B_1$ and $B_2$ are chosen such that $A_1A_2 = CB_1 = BC_2 = a, B_1B_2 = AC_1 = CA_2 = b,
C_1C_2 = BA_1 = AB_2 = c$ . Let the point $A^{'}$ be such that the triangle $A^{'} B_2C_1$ is equilateral, and the points $A$ and $A^{'}$ lie on different sides of the line $B_2C_1$ . Similarly, the points $B^{'}$ and $C^{'}$ are constructed (the triangle $B^{'} C_2A_1$ is equilateral, and the points $B$ and $B^{'}$ lie on different sides of the line $C_2A_1$ ; the triangle $C^{'} A_2B_1$ is equilateral, and the points $C$ and $C^{'}$ lie on different sides of the line $A_2B_1$ ). Prove that the triangle $A^{'}B^{'}C^{'}$ is equilateral.
