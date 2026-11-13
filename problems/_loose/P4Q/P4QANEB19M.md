---
tag: P4QANEB19M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1980 All Soviet Union Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1878616
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55331
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1980
    source: hf-ai-mo-aops
    label: 1980 All Soviet Union Mathematical Olympiad
---
Let the edges of rectangular parallelepiped be $x,y$ and $z$ ( $x<y<z$ ). Let $$ p=4(x+y+z), s=2(xy+yz+zx) \,\, and \,\, d=\sqrt{x^2+y^2+z^2} $$ be its perimeter, surface area and diagonal length, respectively. Prove that $$ x < \frac{1}{3}\left( \frac{p}{4}- \sqrt{d^2 - \frac{s}{2}}\right )\,\, and \,\, z > \frac{1}{3}\left( \frac{p}{4}- \sqrt{d^2 - \frac{s}{2}}\right ) $$
