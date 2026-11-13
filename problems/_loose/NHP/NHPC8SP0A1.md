---
tag: NHPC8SP0A1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210285
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a triangle $ ABC $ which $ \angle B \ne 90^{\circ} $ and $ AB \ne AC $, define $ P_{ABC} $ as follows ;

Let $ I $ be the incenter of triangle $ABC$, and let $ D, E, F $ be the intersection points with the incircle and segments $ BC, CA, AB $. Two lines $ AB $ and $ DI $ meet at $ S $ and let $ T $ be the intersection point of line $ DE $ and the line which is perpendicular with $ DF $ at $ F $. The line $ ST $ intersects line $ EF $ at $ R$. Now define $ P_{ABC} $ be one of the intersection points of the incircle and the circle with diameter $ IR $, which is located in other side with $ A $ about $ IR $.

Now think of an isosceles triangle $ XYZ $ such that $ XZ = YZ > XY $. Let $ W $ be the point on the side $ YZ $ such that $ WY < XY $ and Let $ K = P_{YXW} $ and $ L = P_{ZXW} $. Prove that $ 2 KL \le XY $.
