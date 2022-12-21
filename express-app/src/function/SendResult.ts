const Answer = (status:number, message:string|null, error: any|null, data:any|null) =>
{
  if(error!=null && error instanceof Error) {
    const response = { status: status, message: error.message, errors: error, data: null };
    return response;
  }

  const reopnse = { status, message, errors: error, data: data };
  return reopnse;
}

export default { Answer };