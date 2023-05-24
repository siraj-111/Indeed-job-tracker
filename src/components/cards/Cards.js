import React from 'react'

function Cards() {
  return (
    <>
<div className="flex flex-wrap mb-2 ">
<div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-6">
    <div className="bg-green-600 rounded-lg shadow-lg py-6 px-8">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <i className="fas fa-tasks text-white text-4xl"></i>
        </div>
        <div className="flex-1 text-right">
          <h5 className="text-white uppercase font-bold  text-lg mb-2">Total Jobs Overall</h5>
          <h3 className="text-white font-bold text-5xl leading-tight">
            150<span className="text-green-400 ml-2"><i className="fas fa-caret-down"></i></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-6">
    <div className="bg-blue-600 rounded-lg shadow-lg py-6 px-8">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <i className="fas fa-users text-white text-4xl"></i>
        </div>
        <div className="flex-1 text-right">
          <h5 className="text-white uppercase font-bold  text-lg mb-2">Applied Jobs Overall</h5>
          <h3 className="text-white font-bold text-5xl leading-tight">
            100<span className="text-blue-400 ml-2"><i className="fas fa-caret-down"></i></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-6">
    <div className="bg-red-600 rounded-lg shadow-lg py-6 px-8">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <i className="fas fa-users text-white text-4xl"></i>
        </div>
        <div className="flex-1 text-right">
          <h5 className="text-white uppercase font-bold  text-lg mb-2">Unapplied Jobs Overall</h5>
          <h3 className="text-white font-bold text-5xl leading-tight">
            150<span className="text-red-400 ml-2"><i className="fas fa-caret-down"></i></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-6">
    <div className="bg-green-600 rounded-lg shadow-lg py-6 px-8">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <i className="fas fa-tasks text-white text-4xl"></i>
        </div>
        <div className="flex-1 text-right">
          <h5 className="text-white uppercase font-bold  text-lg mb-2">Total Jobs Per Instance</h5>
          <h3 className="text-white font-bold text-5xl leading-tight">
            150<span className="text-green-400 ml-2"><i className="fas fa-caret-down"></i></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-6">
    <div className="bg-blue-600 rounded-lg shadow-lg py-6 px-8">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <i className="fas fa-users text-white text-4xl"></i>
        </div>
        <div className="flex-1 text-right">
          <h5 className="text-white uppercase font-bold  text-lg mb-2">Applied Jobs Per Instance</h5>
          <h3 className="text-white font-bold text-5xl leading-tight">
            150<span className="text-blue-400 ml-2"><i className="fas fa-caret-down"></i></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
  <div className="w-full sm:w-1/2 lg:w-1/3 p-3 sm:p-6">
    <div className="bg-red-600 rounded-lg shadow-lg py-6 px-8">
      <div className="flex flex-row items-center">
        <div className="flex-shrink pr-4">
          <i className="fas fa-users text-white text-4xl"></i>
        </div>
        <div className="flex-1 text-right">
          <h5 className="text-white uppercase font-bold  text-lg mb-2">Unapplied Jobs Per Instance</h5>
          <h3 className="text-white font-bold text-5xl leading-tight">
            150<span className="text-red-400 ml-2"><i className="fas fa-caret-down"></i></span>
          </h3>
        </div>
      </div>
    </div>
  </div>
</div>


    </>
  )
}

export default Cards