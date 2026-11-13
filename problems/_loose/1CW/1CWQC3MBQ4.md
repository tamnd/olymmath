---
tag: 1CWQC3MBQ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Rioplatense Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3212562
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27645
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228033
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense/2023
    source: hf-ai-mo-aops
    label: 2023 Rioplatense Mathematical Olympiad
---
A group of $4046$ friends will play a videogame tournament. For that, $2023$ of them will go to one room which the computers are labeled with $a_1,a_2,\dots,a_{2023}$ and the other $2023$ friends go to another room which the computers are labeled with $b_1,b_2,\dots,b_{2023}$ . The player of computer $a_i$ **always** challenges the players of computer $b_i,b_{i+2},b_{i+3},b_{i+4}$ (the player doesn't challenge $b_{i+1}$ ). After the first round, inside both rooms, the players may switch the computers. After the reordering, all the players realize that they are challenging the same players of the first round. Prove that if **one** player has **not** switched his computer, then all the players have not switched their computers.
