class ProjectsController < ApplicationController

  def sesa
    render component: 'Sesa', props: { sesa1: view_context.image_path("sesa1.png"),
                                            sesa2: view_context.image_path("sesa2.png"),
                                            sesa3: view_context.image_path("sesa3.png"),
                                            sesa4: view_context.image_path("sesa4.png"),
                                            sesa5: view_context.image_path("sesa5.png"),
                                            sesa6: view_context.image_path("sesa6.png") }
  end

  def makerepo
    render component: 'Makerepo', props: { makerepo1: view_context.image_path("makerepo1.png"),
                                            makerepo2: view_context.image_path("makerepo2.png"),
                                            makerepo3: view_context.image_path("makerepo3.png"),
                                            makerepo4: view_context.image_path("makerepo4.png"),
                                            makerepo5: view_context.image_path("makerepo5.png") }
  end
  
  def compass
    render component: 'Compass', props: { compass1: view_context.image_path("compass1.png"),
                                            compass2: view_context.image_path("compass2.png"),
                                            compass3: view_context.image_path("compass3.png"),
                                            compass4: view_context.image_path("compass4.png"),
                                            compass5: view_context.image_path("compass5.png") }
  end
  
  def yusso
    render component: 'Yusso', props: { yusso1: view_context.image_path("yusso1.png"),
                                            yusso2: view_context.image_path("yusso2.png"),
                                            yusso3: view_context.image_path("yusso3.png"),
                                            yusso4: view_context.image_path("yusso4.png") }
  end
  
end
