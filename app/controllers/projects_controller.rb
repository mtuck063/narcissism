class ProjectsController < ApplicationController

  def sesa
    render component: 'Sesa'
  end

  def makerepo
    render component: 'Makerepo'
  end
  
  def compass
    render component: 'Compass'
  end
  
  def yusso
    render component: 'Yusso'
  end
  
end
