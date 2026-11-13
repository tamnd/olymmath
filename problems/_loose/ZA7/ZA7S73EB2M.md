---
tag: ZA7S73EB2M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: mn
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad 46
---
$M = \{1, \dots, 2010\}$-г хөх, шар, улаан өнгө бүр орсон ба тоо бүр зөвхөн нэг өнгөөр будагдсан байв.
$$
S_1 = \{(x, y, z) \in M^3 \mid x, y, z \text{ нь адил өнгөтэй ба } x + y + z \equiv 0 \pmod{2010}\}
$$
$$
S_2 = \{(x, y, z) \in M^3 \mid x, y, z \text{ нь өөр өнгөтэй ба } x + y + z \equiv 0 \pmod{2010}\}
$$
гэвэл $2|S_1| > |S_2|$ гэж батал.
