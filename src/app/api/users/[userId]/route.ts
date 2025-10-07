export function GET(rep: Request, { params }: { params: { userId: string } }) {
  return Response.json({
    userId: params.userId
  });
}
